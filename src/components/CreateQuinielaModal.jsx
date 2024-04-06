import React, { useState } from "react";
import { Modal, Form, Input, Select, Button, InputNumber } from "antd";
import { toast } from "react-toastify";

const CreateQuinielaModal = ({
  openModal,
  setOpenModal,
  torneos,
  handleCreateQuiniela,
}) => {
  const [name, setName] = useState("");
  const [entranceMoney, setEntranceMoney] = useState(0);
  const [tournament, setTournament] = useState(null);

  const emptyValues = () => {
    return name === "" || !tournament;
  };

  const tournamentOptions = () => {
    return torneos?.map((torneo) => {
      return { value: torneo._id, label: torneo.name };
    });
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  const handleOk = () => {
    if (emptyValues()) {
      toast.error("Llena todos los datos obligatorios");
    } else {
      handleCreateQuiniela({
        name,
        tournament,
        entranceMoney,
      });
    }
  };

  return (
    <Modal
      title="Crear quiniela"
      open={openModal}
      onCancel={handleCancel}
      footer={null}
    >
      <Form.Item className="my-1">
        <h4 className="text-sm my-2">
          <span className="bold text-red-600">* </span>Nombre de la quiniela
        </h4>
        <Input
          placeholder="Nombre de tu quiniela..."
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Item>

      <Form.Item className="my-1">
        <h4 className="text-sm my-2">
          <span className="bold text-red-600">* </span>Torneo
        </h4>
        <Select
          options={tournamentOptions()}
          placeholder="Torneo..."
          onChange={(e) => {
            setTournament(e);
          }}
        />
      </Form.Item>

      <Form.Item className="my-1">
        <h4 className="text-sm my-2">Dinero de entrada (Opcional)</h4>
        <InputNumber
          defaultValue={entranceMoney}
          value={entranceMoney}
          formatter={(value) =>
            `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
          onChange={(e) => {
            setEntranceMoney(e);
          }}
        />
      </Form.Item>
      <Form.Item className="text-right">
        <Button key="back" onClick={handleCancel}>
          Cancelar
        </Button>
        ,
        <Button
          key="submit"
          type="primary"
          className="bg-darkMainColor"
          //   loading={loading}
          onClick={handleOk}
        >
          Crear quiniela
        </Button>
      </Form.Item>
    </Modal>
  );
};

export default CreateQuinielaModal;
