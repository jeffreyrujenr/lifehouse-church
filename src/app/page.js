"use client";

import Head from "next/head";
import Image from "next/image";
import thunder from "next/font/local";

import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  FilledInput,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const thunderFont = thunder({ src: "../fonts/thunder/Thunder-BoldLC.woff2" });

export default function Home() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [mobile, setMobile] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const checkIn = (mobile) => {
    if (mobile.length !== 10) alert("Mobile number should have 10 digits");
    else console.log(mobile);
  };

  return (
    // <main
    // 	className='hero min-h-[90vh]'
    // 	style={{
    // 		backgroundImage: `url("../background.jpg")`,
    // 	}}>
    // 	<div className='hero-overlay bg-opacity-75'></div>
    // 	<div className='hero-content text-center text-neutral-content'>
    // 		<div className='max-w-xl'>
    // 			<h1
    // 				className={`${thunderFont.className} tracking-widest mb-5 text-5xl font-bold`}>
    // 				LIFEHOUSE CHURCH
    // 			</h1>
    // 			<p className='mb-5'>
    // 				Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
    // 				tenetur impedit saepe iste. Placeat assumenda illum esse minima
    // 				magnam dolores inventore maiores rerum vitae nemo?
    // 			</p>
    // 			<div className='flex justify-evenly items-center flex-wrap'>
    // 				<div className='rounded btn btn-ghost block mx-8 h-full p-4'>
    // 					<Image
    // 						src=''
    // 						height={16}
    // 						width={16}
    // 						alt=''
    // 					/>
    // 					<h1 className='text-xl bold mb-2'>Bengaluru</h1>
    // 					<p className='mb-1'>9:00 AM IST</p>
    // 					<p className='mb-1'>11:00 AM IST</p>
    // 				</div>
    // 				<div className='rounded btn btn-ghost block mx-8 h-full p-4'>
    // 					<Image
    // 						src=''
    // 						height={16}
    // 						width={16}
    // 						alt=''
    // 					/>
    // 					<h1 className='text-xl bold mb-2'>Trichy</h1>
    // 					<p className='mb-1'>10:30 AM IST</p>
    // 				</div>
    // 				<div className='rounded btn btn-ghost block mx-8 h-full p-4'>
    // 					<Image
    // 						src=''
    // 						height={16}
    // 						width={16}
    // 						alt=''
    // 					/>
    // 					<h1 className='text-xl bold mb-2'>Chennai</h1>
    // 					<p className='mb-1'>10:30 AM IST</p>
    // 				</div>
    // 				<div className='rounded btn btn-ghost block mx-8 h-full p-4'>
    // 					<Image
    // 						src=''
    // 						height={16}
    // 						width={16}
    // 						alt=''
    // 					/>
    // 					<h1 className='text-xl bold mb-2'>Tirunelveli</h1>
    // 					<p className='mb-1'>Coming soon</p>
    // 				</div>
    // 				<div className='rounded btn btn-ghost block mx-8 h-full p-4'>
    // 					<Image
    // 						src=''
    // 						height={16}
    // 						width={16}
    // 						alt=''
    // 					/>
    // 					<h1 className='text-xl bold mb-2'>London</h1>
    // 					<p className='mb-1'>Coming soon</p>
    // 				</div>
    // 			</div>
    // 		</div>
    // 	</div>
    // </main>

    <main>
      {/* CheckIn */}
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <FormLabel sx={{ marginY: 2 }}>Check-In</FormLabel>
        <FormControl variant="filled" sx={{ m: 1, width: "25ch" }}>
          <InputLabel htmlFor="filled-mobile">Mobile</InputLabel>
          <FilledInput
            id="filled-mobile"
            variant="filled"
            autoFocus
            value={mobile}
            onChange={(text) => setMobile(text)}
            onKeyDown={(e) => {
              e.preventDefault();
              if (e.key === "Enter") {
                checkIn(mobile);
              } else if (e.key === "Backspace") {
                setMobile(mobile.slice(0, -1));
              } else if (e.key === "Delete") {
                setMobile("");
              } else if (typeof parseInt(e.key) === "number") {
                if (mobile.length < 10) setMobile(mobile.concat(e.key));
              }
            }}
          />
        </FormControl>
        {/* <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "25ch",
            marginY: 2,
          }}
        >
          <Button
            sx={{
              width: "30%",
              m: 0.5,
            }}
            variant="contained"
            size="large"
            onClick={() => {
              if (mobile.length < 10) setMobile(mobile.concat("1"));
            }}
          >
            1
          </Button>
          <Button
            sx={{
              width: "30%",
              m: 0.5,
            }}
            variant="contained"
            size="large"
            onClick={() => {
              if (mobile.length < 10) setMobile(mobile.concat("2"));
            }}
          >
            2
          </Button>
          <Button
            sx={{
              width: "30%",
              m: 0.5,
            }}
            variant="contained"
            size="large"
            onClick={() => {
              if (mobile.length < 10) setMobile(mobile.concat("3"));
            }}
          >
            3
          </Button>
          <Button
            sx={{
              width: "30%",
              m: 0.5,
            }}
            variant="contained"
            size="large"
            onClick={() => {
              if (mobile.length < 10) setMobile(mobile.concat("4"));
            }}
          >
            4
          </Button>
          <Button
            sx={{
              width: "30%",
              m: 0.5,
            }}
            variant="contained"
            size="large"
            onClick={() => {
              if (mobile.length < 10) setMobile(mobile.concat("5"));
            }}
          >
            5
          </Button>
          <Button
            sx={{
              width: "30%",
              m: 0.5,
            }}
            variant="contained"
            size="large"
            onClick={() => {
              if (mobile.length < 10) setMobile(mobile.concat("6"));
            }}
          >
            6
          </Button>
          <Button
            sx={{
              width: "30%",
              m: 0.5,
            }}
            variant="contained"
            size="large"
            onClick={() => {
              if (mobile.length < 10) setMobile(mobile.concat("7"));
            }}
          >
            7
          </Button>
          <Button
            sx={{
              width: "30%",
              m: 0.5,
            }}
            variant="contained"
            size="large"
            onClick={() => {
              if (mobile.length < 10) setMobile(mobile.concat("8"));
            }}
          >
            8
          </Button>
          <Button
            sx={{
              width: "30%",
              m: 0.5,
            }}
            variant="contained"
            size="large"
            onClick={() => {
              if (mobile.length < 10) setMobile(mobile.concat("9"));
            }}
          >
            9
          </Button>
          <Button
            sx={{
              width: "30%",
              m: 0.5,
            }}
            variant="contained"
            size="large"
            onClick={() => setMobile("")}
          >
            c
          </Button>
          <Button
            sx={{
              width: "30%",
              m: 0.5,
            }}
            variant="contained"
            size="large"
            onClick={() => {
              if (mobile.length < 10) setMobile(mobile.concat("0"));
            }}
          >
            0
          </Button>
          <Button
            sx={{
              width: "30%",
              m: 0.5,
            }}
            variant="contained"
            size="large"
            onClick={() => setMobile(mobile.slice(0, -1))}
          >
            &lt;
          </Button>
        </Box> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "30ch",
            m: 1,
          }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => checkIn(mobile)}
          >
            Check-In
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => router.push("register")}
          >
            Register
          </Button>
        </Box>
      </form>

      {/* Register */}
      <div></div>
    </main>
  );
}
