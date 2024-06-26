export default function ReviewCardWraper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[163px] min-w-[487px] rounded-[10px] bg-white px-5 pb-[17px] pt-4 shadow-[0px_14px_32px_0px_#673F181A]">
      {children}
    </div>
  );
}
