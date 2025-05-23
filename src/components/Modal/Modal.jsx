export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose} style={buttonStyle}>OK</button>
      </div>
    </div>
  );
}

const overlayStyle = {
  position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex",
  justifyContent: "center", alignItems: "center", zIndex: 9999
};

const modalStyle = {
  backgroundColor: "#fff", padding: "2rem", borderRadius: "8px",
  textAlign: "center", maxWidth: "500px", boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
};

const buttonStyle = {
  marginTop: "1rem", padding: "10px 16px", backgroundColor: "#007bff",
  color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer"
};
