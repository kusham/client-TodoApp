import React from 'react';

const HOC = (Children) => {
  return class extends React.Component {

    render() {
      var token = sessionStorage.getItem("token");
      if (token == null) {
        window.location.replace("/");
      }
      return <Children />
    }
  };
};
export default HOC;