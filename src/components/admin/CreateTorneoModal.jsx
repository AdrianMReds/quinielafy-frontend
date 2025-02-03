import React, { useState } from "react";
import { Modal, Form, Input, Select, Button, InputNumber } from "antd";
import { toast } from "react-toastify";

const CreateTorneoModal = ({
  openModal,
  setOpenModal,
  equipos,
  handleCreateTorneo,
}) => {
  const [name, setName] = useState("");
  const [entranceMoney, setEntranceMoney] = useState(0);
  const [tournament, setTournament] = useState(null);

  const emptyValues = () => {
    return name === "" || !tournament;
  };

  const tournamentOptions = () => {
    return equipos?.map((torneo) => {
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
      title="Crear torneo"
      open={openModal}
      onCancel={handleCancel}
      footer={null}
    >
      <Form.Item className="my-1">
        <h4 className="text-sm my-2">
          <span className="bold text-red-600">* </span>Nombre del torneo
        </h4>
        <Input
          placeholder="Nombre del torneo..."
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Item>

      <Form.Item className="my-1">
        <h4 className="text-sm my-2">
          <span className="bold text-red-600">* </span>Equipos
        </h4>
        <Select
          options={tournamentOptions()}
          placeholder="Equipos..."
          onChange={(e) => {
            setTournament(e);
          }}
        />
      </Form.Item>

      <Form.Item className="text-right mt-4">
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
          Crear torneo
        </Button>
      </Form.Item>
    </Modal>
  );
};

export default CreateTorneoModal;
