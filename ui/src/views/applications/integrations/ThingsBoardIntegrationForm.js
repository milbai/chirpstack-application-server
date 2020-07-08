import React from "react";

import TextField from '@material-ui/core/TextField';
import FormHelperText from "@material-ui/core/FormHelperText";

import FormComponent from "../../../classes/FormComponent";
import Form from "../../../components/Form";


class ThingsBoardIntegrationForm extends FormComponent {
  render() {
    if (this.state.object === undefined) {
      return null;
    }

    return(
      <Form submitLabel={this.props.submitLabel} onSubmit={this.onSubmit}>
        <TextField
          id="server"
          label="ThingsBoard.io server"
          placeholder="http://host:port"
          value={this.state.object.server || ""}
          onChange={this.onChange}
          margin="normal"
          required
          fullWidth
        />
        <FormHelperText>
          Each device must have a 'ThingsBoardAccessToken' variable assigned. This access-token is generated by ThingsBoard.
        </FormHelperText>
      </Form>
    );
  }
}


export default ThingsBoardIntegrationForm;
