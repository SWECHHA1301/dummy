import { hover } from "@testing-library/user-event/dist/hover";
import React, { useRef, useState } from "react";

const OTPInput = ({ length = 6, onChange }) => {
    const [otp, setOtp] = useState(Array(length).fill(""));
    const inputRefs = useRef([]);

    const focusInput = (index) => {
        const input = inputRefs.current[index];
        if (input) input.focus();
    };

    const handleChange = (e, index) => {
        const value = e.target.value.replace(/\D/, "");
        if (!value) return;

        const updatedOtp = [...otp];
        updatedOtp[index] = value[0];
        setOtp(updatedOtp);
        onChange?.(updatedOtp.join(""));

        if (index < length - 1) focusInput(index + 1);
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            if (otp[index]) {
                const updatedOtp = [...otp];
                updatedOtp[index] = "";
                setOtp(updatedOtp);
                onChange?.(updatedOtp.join(""));
            } else if (index > 0) {
                focusInput(index - 1);
            }
        }
    };

    const handlePaste = (e, index) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
        if (!pasted) return;

        const updatedOtp = [...otp];
        for (let i = 0; i < pasted.length && index + i < length; i++) {
            updatedOtp[index + i] = pasted[i];
        }
        setOtp(updatedOtp);
        onChange?.(updatedOtp.join(""));

        const nextIndex = index + pasted.length < length ? index + pasted.length : length - 1;
        focusInput(nextIndex);
    };

    return (
        <div   className="OTP" style={{ display: "flex", gap: "10px" , flexDirection: "row-reverse", margin:"30px 0 30px 50px",}}>
            {otp.map((value, index) => (
                <input
                    key={index}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={value}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={(e) => handlePaste(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    style={{
                        width: "2.2rem",
                        height: "2.8rem",
                        textAlign: "center",
                        fontSize: "1rem",
                        border: "1px solid #ccc",
                        borderRadius: "20px",
                        // margin:"24px  2px 20px 2px",
                    }}
                    aria-label={'Digit ${index + 1}'}
                
                />
            ))}
            
        </div>
    );
};

export default OTPInput;