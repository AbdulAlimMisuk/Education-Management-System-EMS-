import React from 'react'
import PageLayout from '@/components/share/PageLayout'
import useStudent from '../hooks/useStudent'
import BasicModel from '@/components/share/BasicModel'
import FormLayout from '@/components/share/FormLayout'
import fields from '../config/fields'
import TableLayout from '@/components/share/TableLayout'
import Table from '../config/Table'
export default function Student() {
  const student = useStudent()
  return (
    <>
    <PageLayout
            title="Student List"
        description="Student information and records"
        buttonLabel="Add Student"
        form={student.form}
    >
   <BasicModel header="Create Student" form={student.form} size="w-rull lg:w-[35%]" >
    <FormLayout formData={student}  fields={ () => fields (student.sectinState)}/>
   </BasicModel>
    {/* <CardLayout  CardConfig={student.ref} data={Card(student.action)}/> */}
    <TableLayout columns={Table(student.action)} data={student.ref}/>
    </PageLayout>
    </>
  )
}
