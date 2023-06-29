export const Buttons = (props) => {
  const { backgroundColor, color, logo, children } = props;
  const style = {
    backgroundColor,
    color,
    padding: '9px 9px 11px 13px',
    borderRadius: '6px',
    border: '1px solid var(--gray-300, #D1D5DB)',
    boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    width: '115px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
  };

  return (
    <button style={style}>
      <i className={logo}></i>
      {children}
    </button>
  );
};
