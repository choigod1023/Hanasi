import { TopicTagProps } from "../../../types/topic";
import { match } from "ts-pattern";

export const TopicTag = ({
  type,
  value,
  variant = "default",
}: TopicTagProps) => {
  const getTagStyles = () =>
    match(type)
      .with("relationship", () => "bg-soft-rose text-romantic-text")
      .with("mood", () => "bg-soft-lavender text-romantic-text")
      .with("situation", () => "bg-soft-peach text-romantic-text")
      .exhaustive();

  const sizeStyles =
    variant === "default" ? "px-3 py-1" : "px-2 py-0.5 text-xs";

  return (
    <span className={`rounded-full ${sizeStyles} ${getTagStyles()}`}>
      {value}
    </span>
  );
};
