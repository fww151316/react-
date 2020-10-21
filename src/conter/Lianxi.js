import React from 'react';
import { Table,Button } from 'antd';
import { Resizable } from 'react-resizable';

const ResizableTitle = props => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          className="react-resizable-handle"
          onClick={e => {
            e.stopPropagation();
          }}
        />
      }
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

class Lianxi extends React.Component {
   
  state = {
    columns: [
      {
        title: 'Date',
        dataIndex: 'date',
        width: 70,
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        width: 80,
        sorter: (a, b) => a.amount - b.amount,
      },
      {
        title: 'Type',
        dataIndex: 'type',
        width: 80,
      },
      {
        title: 'Note',
        dataIndex: 'note',
        width: 80,
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: () => <div><Button type="primary" onClick={this.dian}>修改</Button><Button type="primary" danger>删除</Button></div>,
      },
    ],
  };


  components = {
    header: {
      cell: ResizableTitle,
    },
  };

  data = [
    {
      key: 0,
      date: '2018-02-11',
      amount: 120,
      type: 'income',
      note: 'transfer',
      action:'1'
    },
    {
      key: 1,
      date: '2018-03-11',
      amount: 243,
      type: 'income',
      note: 'transfer',
    },
    {
      key: 2,
      date: '2018-04-11',
      amount: 98,
      type: 'income',
      note: 'transfer',
    },
  ];

  handleResize = index => (e, { size }) => {
    this.setState(({ columns }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };
      return { columns: nextColumns };
    });
  };
 dian(){
        console.log("eszgrf")
    }
  render() {
    const columns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: column => ({
        width: column.width,
        onResize: this.handleResize(index),
      }),
    }));

    return <Table bordered components={this.components} columns={columns} dataSource={this.data} />;
  }
}
export default Lianxi