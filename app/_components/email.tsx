export default function Email({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const bgColor = variant === "light" ? "bg-white/85" : "bg-white/40";
  const textColor = variant === "light" ? "text-primary" : "text-white";
  return (
    <form className="w-[400px]">
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <div className="relative">
        <input
          name="email"
          id="email"
          type="email"
          placeholder="yourname@company.com"
          className={`w-full rounded-2xl border ${variant === "dark" && "placeholder:text-white/70"} border-white/40 ${bgColor} px-[26px] py-[18px] text-lg leading-3 shadow-[0px_4px_16px_0px_rgba(55,53,40,0.15)]`}
        />

        <button
          type="button"
          className="absolute bottom-[5px] right-[5px] top-[5px] rounded-xl bg-[radial-gradient(92.4%_626.63%_at_7.6%_21.88%,#C67AF7_0%,#FF75C0_42.19%,#FFC95F_97.92%)] px-[22px] text-lg font-bold leading-3 text-white shadow-[0px_0px_0px_0px_rgba(183,102,255,0.3)]"
        >
          Try it now
        </button>
      </div>
      <p className={`mt-4 text-center text-xs leading-3 ${textColor}`}>
        Free 30-days trial, no credit card required
      </p>
    </form>
  );
}
