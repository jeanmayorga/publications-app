import React, { useState } from "react";
import { Form, Button, Input, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import { api } from "../../api";
import { Dispatch, RootState } from "../../store";
import { addPublication } from "../../store/modules";

interface Props {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function PublicationModal({ setIsModalOpen }: Props) {
  const dispatch = useDispatch<Dispatch>();
  const [form] = Form.useForm();
  const authors = useSelector((state: RootState) => state.authors);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [authorId, setAuthorId] = useState<number>(0);

  const handleSave = async (data: any) => {
    setIsLoading(true);
    const dataToInsert = {
      authorId,
      title: data.title,
      body: data.body,
      createdAt: new Date(),
    };
    const response = await api.post(`/publications`, dataToInsert);

    dispatch(
      addPublication({
        ...response.data,
        ...{
          author: authors.find((author) => author.id === authorId),
        },
      })
    );
    setIsModalOpen(false);
    setIsLoading(false);

    form.resetFields();
  };

  return (
    <Form form={form} onFinish={handleSave}>
      <Form.Item
        name="title"
        rules={[{ required: true, message: "Title required!" }]}
      >
        <Input placeholder="Title" />
      </Form.Item>
      <Form.Item
        name="author"
        rules={[{ required: true, message: "Author required!" }]}
      >
        <Select
          showSearch
          style={{ width: "100%" }}
          placeholder="Select an author"
          optionFilterProp="children"
          onChange={(value) => setAuthorId(Number(value))}
          filterOption={(input, option) =>
            option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {authors.map((author) => (
            <Select.Option value={author.id}>
              {author.firstName}, {author.email}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="body"
        rules={[{ required: true, message: "Body required!" }]}
      >
        <Input.TextArea placeholder="Body" rows={3} />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          icon={<PlusOutlined />}
          block
          loading={isLoading}
        >
          Add Publication
        </Button>
      </Form.Item>
    </Form>
  );
}
