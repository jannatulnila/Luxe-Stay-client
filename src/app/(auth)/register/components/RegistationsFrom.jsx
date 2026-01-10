import React from 'react';

function RegistationsFrom(props) {
    const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      photo: form.photo.value,
      password: form.password.value,
    };

    const res = await fetch("http://localhost:5000/api/users/register", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});



    if (!res.ok) {
      const err = await res.json();
      toast.error(err.message);
    } else {
      toast.success("Registration successful!");
      form.reset();
    }
  };
    return (
        <div>
            
        </div>
    );
}

export default RegistationsFrom;