import InputText from "@/components/share/InputText";
import InputCheckbox from "@/components/share/InputCheckbox";
import PrimaryButton from "@/components/share/PrimaryButton";
import DropDown from "@/components/share/DropDown";
import { singleValidataionError } from "@/utils/Helper";


export default function FormLayout({ formData, fields: fieldsData }) {
  const id = crypto.randomUUID();

  return (
    <form
      onSubmit={formData.form.handleSubmit(
        formData.form.watch("_id")
          ? formData.action.onUpdate
          : formData.action.onSubmit
      )}
      className="
        grid 
        grid-cols-1          /* mobile: full width */
        sm:grid-cols-6       /* tablet: 6 columns */
        lg:grid-cols-12      /* desktop: 12 columns */
        gap-4 sm:gap-5
      "
    >
      {fieldsData &&
        fieldsData().map((field, index) => {
          // field.colSpan 그대로 ব্যবহার
          const col = field.colSpan || "col-span-12";

          if (field.type === "checkbox") {
            return (
              <div className={`${col}`} key={id + index}>
                <InputCheckbox
                  {...formData.form.register(field.name, {
                    required: field.required,
                  })}
                  label={field.label}
                  id={id}
                />
                {singleValidataionError(formData, field.name)}
              </div>
            );
          }

          if (field.type === "link") {
            return (
              <div className={`${col}`} key={id + index}>
                <a
                  href={field.href}
                  className="text-sm text-primary-600 hover:text-primary-500"
                >
                  {field.label}
                </a>
              </div>
            );
          }

          if (field.type === "button") {
            return (
              <div className={`${col}`} key={id + index}>
                <PrimaryButton label={field.label} />
              </div>
            );
          }

          if (field.type === "dropdown") {
            return (
              <div className={`${col}`} key={id + index}>
                <DropDown
                  {...formData.form.register(field.name, {
                    required: field.required
                      ? `${field.label} is required`
                      : false,
                  })}
                  label={field.label}
                  options={field.options}
                  placeholder={field.placeholder}
                />
                {singleValidataionError(formData, field.name)}
              </div>
            );
          }

          // default input
          return (
            <div className={`${col}`} key={id + index}>
              <InputText
                {...formData.form.register(field.name, {
                  required: field.required
                    ? `${field.label} is required`
                    : false,
                })}
                label={field.label}
                placeholder={field.placeholder}
                type={field.type}
              />
              {singleValidataionError(formData, field.name)}
            </div>
          );
        })}
    </form>
  );
}
