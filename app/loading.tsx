const Loading = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#272a32] border-t-[#c2f800]" />

        <p className="text-xs font-bold uppercase tracking-[3px] text-gray-500">
          Loading workouts...
        </p>
      </div>
    </div>
  );
};

export default Loading;