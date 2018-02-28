import React, { Component } from 'react'
import DataGrid from 'react-datagrid2'

const defaultColumns = [
  { name: 'id' },
  { name: 'title' },
  { name: 'count' }
]

const createRows = () => {
  let rows = []
  for (let i = 1; i < 1000; i++) {
    rows.push({
      id: i,
      title: 'Title ' + i,
      count: i * 1000
    })
  }

  return rows
}

class Grid extends Component {
  state = {
    show: false
  }

  render () {
    const gridData = createRows()
    const gridColumns = defaultColumns
    if (!this.state.show) return <button onClick={()=> this.setState({show:true})}>show grid</button>

    return (<div>
      <h1>nextjs+react-datagrid2 - problem with mousewheel</h1>
      <DataGrid idProperty='id'
        dataSource={gridData}
        columns={gridColumns}
        style={{height: 400}}
      />
      <link href='//b2b-beta.ipex.cz/assets/css/react-datagrid-no-normalize.min.css' rel='stylesheet' />
    </div>)
  }
}

export default () => <Grid />
