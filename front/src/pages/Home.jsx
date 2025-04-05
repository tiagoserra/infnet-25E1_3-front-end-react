import { useState } from 'react';
import { Container, Button, Table, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import TaskModal from '../components/TaskModal';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const toggle = () => {
    setModalOpen(!modalOpen);
    if (!modalOpen) setSelectedTask(null);
  };

  const toggleDeleteModal = () => {
    setDeleteModalOpen(!deleteModalOpen);
  };

  const handleSave = (task) => {
    if (selectedTask) {
      setTasks(tasks.map(t => t.id === selectedTask.id ? { ...task, id: selectedTask.id } : t));
    } else {
      setTasks([...tasks, { ...task, id: Date.now() }]);
    }
  };

  const handleEdit = (task) => {
    setSelectedTask(task);
    setModalOpen(true);
  };

  const handleDelete = (task) => {
    setTaskToDelete(task);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    setTasks(tasks.filter(task => task.id !== taskToDelete.id));
    setDeleteModalOpen(false);
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Tarefas</h2>
        <Button color="primary" onClick={toggle}>Nova Tarefa</Button>
      </div>

      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Data</th>
            <th>Hora</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>{task.type}</td>
              <td>{task.date}</td>
              <td>{task.time}</td>
              <td>
                <Button color="info" size="sm" className="mr-2" onClick={() => handleEdit(task)}>
                  <FaEdit />
                </Button>
                <Button color="danger" size="sm" onClick={() => handleDelete(task)}>
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <TaskModal
        isOpen={modalOpen}
        toggle={toggle}
        task={selectedTask}
        onSave={handleSave}
      />

      <Modal isOpen={deleteModalOpen} toggle={toggleDeleteModal}>
        <ModalHeader toggle={toggleDeleteModal}>Confirmar Exclusão</ModalHeader>
        <ModalBody>
          Tem certeza que deseja excluir esta tarefa?
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleDeleteModal}>Não</Button>
          <Button color="danger" onClick={confirmDelete}>Sim</Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default Home; 