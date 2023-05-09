import '@assets/tailwind.css';
import FinishedTodos from '@components/Todo/FinishedTodos';
import NewTodo from '@components/Todo/NewTodo';
import RemainingTodos from '@components/Todo/RemainingTodos';
import SearchTodo from '@components/Todo/SearchTodo';
import { Button } from '@ui/Buttons';
import { TrashIcon } from '@ui/Icons';
import { Modal } from '@ui/Modal';
import { useCallback, useState, type FC } from 'react';
import Div100vh from 'react-div-100vh';
import { Toaster } from 'react-hot-toast';

const App: FC = () => {
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const onConfirmationModalOpen = useCallback(() => {
    setConfirmationModalOpen(true);
  }, []);

  const onConfirmationModalClose = useCallback(() => {
    setConfirmationModalOpen(false);
  }, []);

  return (
    <Div100vh className="flex items-center justify-center px-4">
      <div className="flex w-full max-w-3xl flex-col space-y-4 rounded-xl border border-accent-1 bg-white p-6">
        <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:space-y-0">
          <h1 className="mb-2 text-2xl">Marvelous v2.0</h1>
          <Button
            colorSchema="danger"
            variant="outline"
            icon={<TrashIcon />}
            onClick={onConfirmationModalOpen}
          >
            Delete all tasks
          </Button>
        </div>
        <div className="flex flex-col-reverse gap-4 md:grid md:grid-cols-2">
          <NewTodo />
          <SearchTodo />
        </div>
        <div className="flex flex-col-reverse gap-4 md:grid md:grid-cols-2">
          <RemainingTodos />
          <FinishedTodos />
        </div>
      </div>
      <Toaster
        toastOptions={{ duration: 5_000 }}
        position={'top-right'}
      />
      <Modal
        isOpen={confirmationModalOpen}
        colorSchema="danger"
        title="Delete all tasks confirmation"
        cancelButton={
          <Button
            onClick={onConfirmationModalClose}
            variant="ghost"
          >
            Cancel
          </Button>
        }
        confirmButton={<Button colorSchema="danger">Confirm</Button>}
        onClose={onConfirmationModalClose}
      >
        <p className="text-sm text-accent-4">
          Are you sure you want to delete all tasks? All data will be
          permanently removed from our servers forever. This action cannot be
          undone.
        </p>
      </Modal>
    </Div100vh>
  );
};

export default App;
