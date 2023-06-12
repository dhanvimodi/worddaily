// import {
//     S3Client,
//     GetObjectCommand,} from "@aws-sdk/client-s3"
// import { useState,useEffect } from "react"
// import {Readable} from "stream";
// import {createReadStream} from "fs";
// import 'react-native-url-polyfill/auto';
// import 'react-native-get-random-values';
// import { v4 as uuidv4 } from 'uuid';

// const useData=()=>{

// 	const [wordList,setWordList]=useState([])

// 	//console.log(wordList)
// 	useEffect(()=>{
// 	createWordList()
// 	   },[])

	 

// 	   function getDate(date,idx){
// 		//console.log("In get date")
// 		let dateObj = new Date(date);

// 		// get a previous date from dateObj
// 		dateObj.setDate(dateObj.getDate()-idx)

// 		let month = String(dateObj.getMonth() + 1).padStart(2, '0');
// 		let day = String(dateObj.getDate()).padStart(2, '0');
// 		let year = dateObj.getFullYear();

// 		//date is in mm-dd-yyyy format
// 		let objectName = month + '-' + day + '-' + year;
// 		return objectName;
// 	   }
	
// 	   const createWordList=async(date,numberOfWords)=>{
// 		//console.log(obj)
// 		//console.log("In create word list")
// 		//const {numberOfWords,date}=obj
// 		const arr=[]
// 		if(numberOfWords && date){
// 		//	console.log(numberOfWords)
// 		//console.log(date)
		
// 		for(let i=0;i<numberOfWords;i++){
// 			//console.log("In for with index ",i)
// 			objectName=getDate(date,i)
// 			//console.log(objectName)
// 				arr[numberOfWords-i-1]=await getObject("word-of-the-day-app",`${objectName}.json`)
			 
// 		}
		
// 	//	arr[numberOfWords]=newData
// 		}
		
// 		//setWordList(arr)

// 		return arr
// 	   }
// //console.log(wordList)
// 	   const getObject=async(bucketName,objectName)=>{
// 	//	console.log("In get object")
// 	//	console.log(bucketName)
// 		const region = "us-east-2";
// 		const client = new S3Client({ region ,
// 		credentials:{
// 		  accessKeyId:"AKIA435GHHSMRV4RRM55",
// 		  secretAccessKey: "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"
// 		}
// 		});
	  
// 		const command = new GetObjectCommand({
// 		  Bucket: bucketName,
// 		  Key: objectName,
// 		});
	  
	
// 		const { Body } = await client.send(command);
	
	
// 		const res= await Body.transformToString()
// 		//console.log(res)
// 		const obj=JSON.parse(res)
// 	//	console.log(obj)
// 		return obj
// 	}

// 	return [createWordList]
	

// }

// export  {useData}

