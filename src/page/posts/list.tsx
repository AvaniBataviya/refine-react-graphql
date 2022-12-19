import {
  List,
  Table,
  useTable,
  FilterDropdown,
  Select,
  Space,
  ShowButton,
  DeleteButton,
  getDefaultSortOrder,
  useSelect,
} from "@pankod/refine-antd";
import { IResourceComponentsProps } from "@pankod/refine-core";

import { ICategory, IPost } from "interfaces";

export const PostList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<IPost>({
    initialSorter: [
      {
        field: "id",
        order: "asc",
      },
    ],
    metaData: {
      fields: [
        "id",
        "title",
        {
          category: ["title"],
        },
      ],
    },
  });

  const { selectProps } = useSelect<ICategory>({
    resource: "categories",
    metaData: {
      fields: ["id", "title"],
    },
  });
  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          title="ID"
          sorter={{ multiple: 2 }}
          defaultSortOrder={getDefaultSortOrder("id", sorter)}
        />
        <Table.Column
          key="title"
          dataIndex="title"
          title="Title"
          sorter={{ multiple: 1 }}
        />
        <Table.Column<IPost>
          dataIndex="category"
          title="Category"
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Select
                style={{ minWidth: 200 }}
                mode="multiple"
                placeholder="Select Category"
                {...selectProps}
              />
            </FilterDropdown>
          )}
          render={(_, record) => record.category?.title}
        />
        <Table.Column<IPost>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
