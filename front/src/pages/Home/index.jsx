import { useState } from 'react';
import { Table, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import TaskModal from '../../components/TaskModal';
import { Container, Header, Title, ActionButton, TableActions } from './styles';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);

  return (
    <Container>
      <Header>
        <Title>Tarefas</Title>
        <Button color="primary" onClick={toggle}>Nova Tarefa</Button>
      </Header>

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
                <TableActions>
                  <ActionButton color="info" size="sm" onClick={() => handleEdit(task)}>
                    <FaEdit />
                  </ActionButton>
                  <ActionButton color="danger" size="sm" onClick={() => handleDelete(task)}>
                    <FaTrash />
                  </ActionButton>
                </TableActions>
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