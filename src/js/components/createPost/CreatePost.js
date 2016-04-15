import React, {PropTypes} from 'react';

class CreatePost extends React.Component {

  static propTypes = {
    onClick: PropTypes.func
  };

  state = {
    value: ''
  };

  handleClick = () => {
    const that = this;
    const value = that.state.value;
    that.setState({
      value: ''
    });
    that.props.onClick(value);
  };

  render() {
    const {state} = this;

    return (
      <div className="c-p--cont">
        <textarea value={state.value} onChange={e => this.setState({value: e.target.value})}/>
        <div className="c-p--ftr">
          <button>Cancel</button>
          <button onClick={this.handleClick}>Save</button>
        </div>
      </div>
    );
  }
}

export default CreatePost;
