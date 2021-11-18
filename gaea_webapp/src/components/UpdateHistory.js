import React from "react";
import DataTable from 'react-data-table-component';


class UpdateHistory extends React.Component {
    renderHead(){
        console.log(this.props.data)

        const heads = this.props.columns.map((item, index)=>{
            return(
                <th key={index}>{item['name']}</th>
              )
                })
        return heads
        }
    renderRow(item) {
        const row = item.map(item =>item)
        return row

    }
    renderBody() {
        const body = this.props.data.map(item =>this.renderRow(item))
        return body
    }

    render() {
        return (
            <div className="table-responsive">
                <h3 className="text-center">Update History</h3>
                {/* <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            {this.renderHead()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderBody}
                    </tbody>
                </table> */}
                <DataTable
                pagination
                highlightOnHover
                columns={this.props.columns}
                data={this.props.data}
                />
            </div>
        )
    }
}


export default UpdateHistory;