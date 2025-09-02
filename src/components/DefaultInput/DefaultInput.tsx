import styles from "./DefaultInput.module.css";

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<"input">;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      <label className={styles.formTaskContentLabel} htmlFor={id}>
        {labelText}
      </label>
      <input className={styles.formTaskContent} type={type} id={id} {...rest} />
    </>
  );
}
