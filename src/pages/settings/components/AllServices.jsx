import React, { useState } from 'react'
import { Formik, Form } from 'formik';
import { CgSpinner } from 'react-icons/cg';
import * as Yup from "yup"
import { db } from '../../../firebase-config';
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';

const AllServices = () => {
    const [loading, setLoading] = useState(false)

    const formValidationSchema = Yup.object().shape({
        heading: Yup.string()
            .test("maxWords", "Heading must be 6 words or less", (value) => {
                return value ? value.trim().split(/\s+/).length <= 6 : true;
            })
            .required("Heading is required"),
        sub: Yup.string()
            .test("maxWords", "Sub Text must be 20 words or less", (value) => {
                return value ? value.trim().split(/\s+/).length <= 20 : true;
            })
            .required("Sub Text is required"),
    });

    const submitForm = async (values, action) => {
        setLoading(true);
        try {
            await addDoc(collection(db, 'services'), {
                title: values?.heading,
                description: values?.sub,
            });
            toast.success('Service Created Successfully!');
            action.resetForm()
        } catch (error) {
            toast.error('Error Creating Service. Try again.');
            console.error('Error Creating Service: ', error);
        } finally {
            setLoading(false);
        }
    };

  return (
     <div className='mt-[40px] flex flex-col'>
        <div>
            <Formik
                initialValues={{
                    heading: "",
                    sub: "",
                }}
                    validationSchema={formValidationSchema}
                    onSubmit={(values, action) => {
                    window.scrollTo(0, 0);
                    console.log(values, "market")
                    submitForm(values, action);
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    dirty,
                    isValid,
                    setFieldValue,
                    errors,
                    touched,
                    // setFieldTouched,
                    values,
                }) => (
                    <Form onSubmit={handleSubmit} className="flex  ">
                        <div className="flex flex-col  w-[520px] gap-6">
                            
                            <div className='flex flex-col gap-1 w-full'>
                                <label className='font-sans text-[#1C1A3C] font-medium text-sm'>Heading Text</label>
                                <input
                                    name="heading"
                                    placeholder=""
                                    type="text" 
                                    value={values?.heading}
                                    onChange={handleChange}
                                    className="outline-[#2D84FF] bg-[#FFF] text-[#3A3A3C] font-poppins text-base rounded-lg border border-[#E1E5F3] p-2 h-[40px] border-solid "
                                />
                                {errors.heading && touched.heading ? (
                                <div className="text-RED-_100 text-xs">
                                    {errors.heading}
                                </div>
                                ) : null}
                            </div>

                            <div className='flex flex-col gap-1 w-full'>
                                <label className='font-sans text-[#1C1A3C] font-medium text-sm'>Sub Text</label>
                                <textarea
                                    name="sub"
                                    placeholder=""
                                    type="text" 
                                    value={values?.sub}
                                    onChange={handleChange}
                                    className="outline-[#2D84FF] bg-[#FFF] text-[#3A3A3C] font-poppins text-base rounded-lg border border-[#E1E5F3] p-2 h-[119px] border-solid "
                                ></textarea>
                                {errors.sub && touched.sub ? (
                                <div className="text-RED-_100 text-xs">
                                    {errors.sub}
                                </div>
                                ) : null}
                            </div>
                                                    

                            <button
                                className={`${isValid ? "bg-[#2D84FF]" : "bg-[#BABABA]"} w-full font-poppins flex items-center rounded-[6px] justify-center mt-[32px] h-[46px] text-base text-center`}
                                type="submit"
                                disabled={!isValid}
                            >
                                <p className='text-[#fff] text-sm font-poppins font-semibold'>{loading ? <CgSpinner className=" animate-spin text-lg " /> : 'Complete'}</p>
                                
                            </button>
                            
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    </div>
  )
}

export default AllServices