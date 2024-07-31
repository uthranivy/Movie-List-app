import React, { Component } from "react";
import DataTable from "./data-table";
import axios from "axios";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersCollection: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/users")
      .then((res) => {
        this.setState({ usersCollection: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  dataTable() {
    return this.state.usersCollection.map((data, i) => {
      return <DataTable obj={data} key={i} />;
    });
  }

  render() {
    return (
      <div className="container">
        <table className="table table-striped table-dark">
          <thead className="thead-dark">
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>{this.dataTable()}</tbody>
        </table>
      </div>
    );
  }
}

export default User;
