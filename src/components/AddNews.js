// import React, { useState } from "react";
// import { Formik, Form, Field } from "formik";
// import { TextField } from "material-ui-formik-components/TextField";
// import { Select } from "material-ui-formik-components/Select";
// import { DateTimePicker } from "material-ui-formik-components/DateTimePicker";
// import { Button, TextareaAutosize } from "@material-ui/core";
// import { MuiPickersUtilsProvider } from "@material-ui/pickers";
// import MomentUtils from "@date-io/moment";
// import moment from "moment";
// import { useDispatch } from "react-redux";
// import { addNews, editNews } from "../../actions/newsActions";
// import { makeStyles } from "@material-ui/core/styles";
// import CardTemplate from "../components/CardTemplate";
// import { useParams } from "react-router-dom";
// import dummyData from "../contents/dummy-data";

// const useStyles = makeStyles({
//   root: {
//     minWidth: 300,
//     maxWidth: "45%",
//     height: "35vw",
//     borderRadius: "30px",
//     marginLeft: "2.3vw",
//     marginTop: "2vh",
//   },
// });

// const AddNews = () => {
//   const classes = useStyles();
//   let parameter = useParams();

//   let isThereContent = dummyData.some((each) => each.id == parameter.id);
//   console.log("is there content:", isThereContent);

//   let contentObj = {
//     id: 0,
//     title: "",
//     datetime: moment(),
//     description: "",
//   };

//   let editState = false;

//   if (isThereContent) {
//     editState = true;
//     let content = dummyData.find((each) => each.id == parameter.id);
//     console.log("content", content);
//     contentObj.id = content.id;
//     contentObj.title = content.title;
//     contentObj.datetime = moment();
//     contentObj.description = content.description;
//   }

//   console.log("content obj: ", contentObj);

//   const dispatch = useDispatch();
//   const [index, setIndex] = useState(5);

//   return (
//     <CardTemplate classes={classes.root}>
//       <h1 style={{ marginLeft: "1em" }}>Add Edit News</h1>
//       <Formik
//         initialValues={contentObj}
//         onSubmit={(values) => {
//           console.log("edit state", editState);
//           if (editState) {
//             // dispatch(editNews(contentObj.id, values.title, values.description));
//             editState = false;
//           } else {
//             // dispatch(addNews(index, values.title, values.description));
//             setIndex((prev) => prev + 1);
//           }
//         }}
//       >
//         {(formik) => (
//           <Form style={{ display: "flex", flex: "1", flexDirection: "column", marginLeft: "2em" }}>
//             <Field name="title" label="Title" component={TextField} style={{ width: "15vw" }} />
//             <MuiPickersUtilsProvider utils={MomentUtils}>
//               <Field
//                 style={{ width: "15vw" }}
//                 required
//                 name="datetime"
//                 label="Datetime"
//                 // options={[
//                 //   { value: "Male", label: "Male" },
//                 //   { value: "Female", label: "Female" },
//                 //   { value: "Other", label: "Other" },
//                 // ]}
//                 component={DateTimePicker}
//               />
//             </MuiPickersUtilsProvider>
//             <h3 style={{ fontWeight: "lighter" }}>Description</h3>
//             <Field
//               name="description"
//               label="description"
//               as="textarea"
//               rowsMin={10}
//               style={{ width: "95%", minHeight: "12em" }}
//             />
//             <Button type="submit" style={{ marginRight: "1em", marginTop: "1em" }}>
//               Submit
//             </Button>
//           </Form>
//         )}
//       </Formik>
//     </CardTemplate>
//   );
// };

// export default AddNews;
