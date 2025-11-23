import React from 'react'
import PageLayout from '@/components/share/PageLayout'
import BasicModel from '@/components/share/BasicModel'
import useTeacher from '../hooks/useTeacher'
import FormLayout from '@/components/share/FormLayout';
import fields from '../config/fields';
import CardLayout from '@/components/share/CardLayout';
import Card from '../config/Card';


export default function Teacher() {
    const teacher =useTeacher();
  return (
    <>
    <PageLayout  title="Teachers Management"
        description="Manage teachers information and records"
        buttonLabel="Add Teachers"
        form={teacher.form}
        >
         <BasicModel header="Create Teachers" form={teacher.form}  size="w-rull lg:w-[30%]">
         <FormLayout formData={teacher} fields={() => fields(teacher.action)}/>
         </BasicModel>
            <CardLayout CardConfig={teacher.list} data={Card(teacher.action)} />
        </PageLayout>
    </>
  )
}

