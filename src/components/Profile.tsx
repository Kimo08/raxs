import { Box, Button } from "@mui/material";
import { useState } from "react";

const Profile = () => {
  const [image, setImage] = useState();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      // you can display the error to the user
      console.error("Select a file");
      return setImage;
    }
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "url(/img/ava.jpg) no-repeat",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          background: "lightgrey",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: { xs: "450px", md: "700px" },
          borderRadius: "10px",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "40px",
          }}
        >
          <h3 style={{ fontWeight: 700 }}>Profile Details</h3>
          <label
            htmlFor="avatar"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "gray",
              cursor: "pointer",
            }}
          >
            <input
              onChange={handleChange}
              type="file"
              id="avatar"
              accept=".png, .jpg, .jpeg"
              hidden
            />
            <img
              src={image ? URL.createObjectURL(image) : "/src/assets/react.svg"}
              style={{ width: "50px", aspectRatio: "1/1", borderRadius: "50%" }}
            />
            upload profile image
          </label>
          <input
            style={{
              padding: "10px",
              width: "240px",
              border: "1px solid #c9c9c9",
              outlineColor: "#077eff",
            }}
            type="text"
            placeholder="Your name"
            required
          />
          <textarea
            style={{
              padding: "10px",
              width: "240px",
              border: "1px solid #c9c9c9",
              outlineColor: "#077eff",
            }}
            placeholder="Write profile bio"
            required
          />
          <Button
            sx={{ border: "none", cursor: "pointer" }}
            type="submit"
            color="secondary"
            variant="contained"
          >
            Save
          </Button>
        </form>
        <img
          src={image ? URL.createObjectURL(image) : "/src/assets/logon.svg"}
          alt=""
          style={{
            maxWidth: "160px",
            minWidth: "50px",
            aspectRatio: "1/1",
            margin: "20px auto",
            borderRadius: "50%",
          }}
        />
      </Box>
    </div>
  );
};

export default Profile;
