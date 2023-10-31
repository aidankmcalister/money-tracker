const TransactionDate = ({ transaction }) => {
  const isoDateString = transaction.datetime;
  const date = new Date(isoDateString);

  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const timeOptions = { hour: "2-digit", minute: "2-digit" };

  const formattedDate = date.toLocaleDateString(undefined, dateOptions);
  const formattedTime = date.toLocaleTimeString(undefined, timeOptions);

  const formattedTimeWithoutLeadingZero = formattedTime.replace(
    /(^|[^0-9])0(?=[0-9]:)/g,
    "$1"
  );

  return (
    <div className="text-sm text-slate-600">
      {formattedDate} <br /> {formattedTimeWithoutLeadingZero}
    </div>
  );
};

export default TransactionDate;
