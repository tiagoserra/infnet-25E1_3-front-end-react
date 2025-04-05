import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import taskTypes from '../assets/taskTypes.json';

const TaskModal = ({ isOpen, toggle, task, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    description: '',
    type: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (task) {
      setFormData(task);
    }
  }, [task]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.date || !formData.time || !formData.description || !formData.type) {
      setError('Todos os campos são obrigatórios!');
      return;
    }
    onSave(formData);
    toggle();
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        {task ? 'Editar Tarefa' : 'Nova Tarefa'}
      </ModalHeader>
      <ModalBody>
        {error && <Alert color="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Nome</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="type">Tipo</Label>
            <Input
              type="select"
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="">Selecione...</option>
              {taskTypes.types.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="date">Data</Label>
            <Input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="time">Hora</Label>
            <Input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Descrição</Label>
            <Input
              type="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>Cancelar</Button>
        <Button color="primary" onClick={handleSubmit}>Salvar</Button>
      </ModalFooter>
    </Modal>
  );
};

export default TaskModal; 