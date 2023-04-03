import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

export default function MultilineTextFields() {
  const baseURL = "http://localhost:8080/text";
 

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [outText, setOutText] = useState("");

  const handleChange1 = (e) => {
    setText1(e.target.value);
  };

  const handleChange2 = (e) => {
    setText2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const mergeText = {
    //   firstInput: text1,
    //   secondInput: text2
    // }
    postData()
  };

   const postData = async () =>{
      await axios.post(baseURL,{}, {params:{
        firstInput: text1,
        secondInput: text2
      }}).then(response => {
        setOutText( response.data)})
      .catch(err => console.warn(err));
      
     
  }
  // const getData = async () => {
  //   await axios(baseURL).then((res) => {
  //     const outPut =res.data[res.data.length-1].firstInput;
  //     console.log(res);
  //     setOutText(outPut);
  //   });
  // };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { ml: 10, mt: 5, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-textarea"
          label="Metin giriniz"
          placeholder="Placeholder"
          value={text1}
          onChange={handleChange1}
          multiline
        />

        <TextField
          id="outlined-textarea"
          label="Metin giriniz"
          placeholder="Placeholder"
          value={text2}
          onChange={handleChange2}
          multiline
        />
      </div>
      <Box
        sx={{
          ml: 10,
          mt: 5,
        }}
      >
        <Button variant="contained" onClick={handleSubmit}>
          Birleştir
        </Button>
      </Box>
      <Box
        sx={{
          ml: 10,
          mt: 5,
        }}
      >
        <Button variant="contained" color="success">
          Kaydet
        </Button>
      </Box>

      <div>
        <TextField
          id="outlined-disabled"
          label="socuç"
          value={outText}
          multiline
        />
      </div>
    </Box>
  );
}
