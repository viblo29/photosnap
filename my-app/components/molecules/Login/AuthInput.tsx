import { UseFormRegister, FieldErrors } from "react-hook-form";

const EyeIcon = ({ visible }: { visible: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    {visible ? (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
    ) : (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.644C3.413 8.133 7.182 4.5 12 4.5c4.788 0 8.557 3.633 9.963 7.178.07.175.07.362 0 .537C20.587 15.867 16.818 19.5 12 19.5c-4.788 0-8.557-3.633-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    )}
  </svg>
);

interface AuthInputProps {
  placeholder: string;
  type?: string;
  name: any;
  register: UseFormRegister<any>;
  validation?: object;
  errors: FieldErrors<any>;
  showToggle?: boolean;
  onToggle?: () => void;
  visible?: boolean;
}

export const AuthInput = ({
  placeholder,
  type = "text",
  name,
  register,
  validation,
  errors,
  showToggle,
  onToggle,
  visible,
}: AuthInputProps) => (
  <div className="w-full relative">
    <input type={showToggle ? (visible ? "text" : "password") : type}
      placeholder={placeholder}
      className={`w-full border px-4 py-2 rounded-none transition-colors duration-300 ${
        showToggle ? "pr-10" : ""
      } ${errors[name] ? "border-red-500" : "border-gray-300 focus:border-black"}`}
      {...register(name, validation)}
    />
    {showToggle && (
      <button
        type="button"
        onClick={onToggle}
        className="absolute right-3 top-2.5 text-gray-500 hover:text-black transition-colors cursor-pointer"
      >
        <EyeIcon visible={visible!} />
      </button>
    )}
    {errors[name] && (
      <p className="text-red-500 text-sm mt-1">{errors[name]?.message as string}</p>
    )}
  </div>
);