import React from 'react';

export default class History extends React.Component {
  render() {
    console.log(this.props.history)
    return (
      <div className='col-sm-6'>
        <div className='card'>
          <div className='card-header bg-dark text-white'>History</div>
            <div className='card-body'>
              <table className='table table-striped'>
                <tbody>
                  {this.props.history.map(search => (
                    <tr key={ search.date }>
                      <td>
                        <div className='float-left'>{search.name}</div>
                        <div className='float-right'>{search.date.toLocaleDateString()}</div>
                        <br />
                        <div className='float-right'>{search.date.toLocaleTimeString()}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
      </div>
    );
  }
}
