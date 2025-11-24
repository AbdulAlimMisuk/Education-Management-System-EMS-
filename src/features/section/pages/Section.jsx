import PageLayout from "@/components/share/PageLayout";
import BasicModel from "@/components/share/BasicModel";
import useSection from "../hooks/useSection";
import FormLayout from "@/components/share/FormLayout";
import fields from "../config/fields";
import TableLayout from "@/components/share/TableLayout";
import table from "../config/table";

export default function Section() {
   const studentSection = useSection();
  return (
    <>
      <PageLayout
        title="Section List"
        description="Section information and records"
        buttonLabel="Add Section"
        form={studentSection.form}
        
      >
    <BasicModel header="Create Section" form={studentSection.form} size="w-rull lg:w-[32%]"> 
      <FormLayout formData={studentSection} fields={ () => fields(studentSection.sectinState)}/>
    </BasicModel>
    <TableLayout filter={false} columns={table(studentSection.action)}
    data={studentSection.user}
    />
      </PageLayout>
    </>
  );
}
