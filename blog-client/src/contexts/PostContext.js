import React, { Component } from "react";

const Context = React.createContext();

const { Provider, Consumer: PostIdConsumer } = Context;

class PostIdProvider extends Component {
  state = {
    value: "랄랄라",
  };

  actions = {
    setValue: (value) => {
      this.setState({ value });
    },
  };

  render() {
    const { state, actions } = this;

    const value = { state, actions };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { PostIdProvider, PostIdConsumer };
