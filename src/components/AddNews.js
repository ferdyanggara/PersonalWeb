import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "material-ui-formik-components/TextField";
import { Select } from "material-ui-formik-components/Select";
import { DateTimePicker } from "material-ui-formik-components/DateTimePicker";
import { Button, TextareaAutosize } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addNews } from "../store/actions/newsActions";
import { makeStyles } from "@material-ui/core/styles";
import CardTemplate from "../components/CardTemplate";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: "45%",
    height: "35vw",
    borderRadius: "30px",
    marginLeft: "2.3vw",
    marginTop: "2vh",
  },
});

const AddNews = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [index, setIndex] = useState(5);

  return (
    <CardTemplate classes={classes.root}>
      <h1 style={{ marginLeft: "1em" }}>Add News</h1>
      <Formik
        initialValues={{
          title: "",
          datetime: moment(),
          description: "",
        }}
        onSubmit={(values) => {
          dispatch(addNews(index, values.title, values.description));
          setIndex((prev) => prev + 1);
          window.location.replace("/");
        }}
      >
        {(formik) => (
          <Form style={{ display: "flex", flex: "1", flexDirection: "column", marginLeft: "2em" }}>
            <Field name="title" label="Title" component={TextField} style={{ width: "15vw" }} />
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Field
                style={{ width: "15vw" }}
                required
                name="datetime"
                label="Datetime"
                // options={[
                //   { value: "Male", label: "Male" },
                //   { value: "Female", label: "Female" },
                //   { value: "Other", label: "Other" },
                // ]}
                component={DateTimePicker}
              />
            </MuiPickersUtilsProvider>
            <h3 style={{ fontWeight: "lighter" }}>Description</h3>
            <Field
              name="description"
              label="description"
              as="textarea"
              rowsMin={10}
              style={{ width: "95%", minHeight: "12em" }}
            />
            <Button type="submit" style={{ marginRight: "1em", marginTop: "1em" }} disabled={!formik.dirty}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </CardTemplate>
  );
};

export default AddNews;
