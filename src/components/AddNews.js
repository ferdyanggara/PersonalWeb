import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "material-ui-formik-components/TextField";
import { Select } from "material-ui-formik-components/Select";
import { DateTimePicker } from "material-ui-formik-components/DateTimePicker";
import { Button } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addNews } from "../store/actions/newsActions";
const AddNews = () => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(5);
  return (
    <div>
      <h1>Add Event</h1>
      <Formik
        initialValues={{
          title: "",
          datetime: moment(),
        }}
        onSubmit={(values) => {
          dispatch(addNews(index, values.title, "hi man"));
          setIndex((prev) => prev + 1);
          alert(`Title: ${values.title}\n Datetime: ${JSON.stringify(values)}`);
        }}
      >
        {(formik) => (
          <Form>
            <Field name="title" label="Title" component={TextField} />
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Field
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
            <Button type="submit" disabled={!formik.dirty}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddNews;
