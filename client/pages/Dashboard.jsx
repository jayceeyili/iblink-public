import React from 'react';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // { -------PAGE WRAPPER------ }
      <div className="container-fluid main">


        {/* -------LEFT HAND COLUMN------- */}
        <div className="col-sm-3 account">
          <Account />
        </div>

        {/* -------RIGHT HAND COLUMN------- */}
        <div className="col-sm-9 right9">

          {/* -------TOPBAR------- */}
          <div className="col-sm-12 topbar">
            <TopBar event={this.state.currentEvent} owner={this.props.friends[0]} />
          </div>

          <div className="mainviewWrapper">
            {/* -------MAIN------- */}
            <div className="col-sm-8 mainview">
              {this.state.owner ? (<EventOverview event={this.state.currentEvent} />) : (<FriendEventOverview event={this.state.currentEvent} />)}
              {/* <FriendEventOverview event={this.state.currentEvent}/>*/}


            </div>

            {/* -------CHAT------- */}
            <div className="col-sm-4 right4">
              <Chat event={this.state.currentEvent} owner={this.props.friends[0]} />
            </div>
          </div>

        </div>
      </div>

    );
  }
}
