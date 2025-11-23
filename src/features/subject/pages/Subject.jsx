import React from "react";
import PageLayout from "@/components/share/PageLayout";
import BasicModel from "@/components/share/BasicModel";
import useSubject from "../hooks/useSubject";
import FormLayout from "@/components/share/FormLayout";
import fields from "../config/fields";
import CardLayout from "@/components/share/CardLayout";
import Card from '../config/Card'

export default function Subject() {
     const Subject = useSubject()
  return (
    <>
      <PageLayout
        title="Subject List"
        description="Manage subject information and records"
        buttonLabel="Add Subject"
        form={Subject.form}
      >
        <BasicModel header="Create Student" form={Subject.form} size="w-rull lg:w-[30%]">
          <FormLayout formData={Subject} fields={ () => fields (Subject.sectinState)}/>
        </BasicModel>
        <CardLayout CardConfig={Subject.list} data={Card(Subject.action)}/>
      </PageLayout>
    </>
  );
}
