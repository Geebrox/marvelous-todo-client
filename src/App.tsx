import { ROUTES } from '@assets/constants';
import '@assets/tailwind.css';
import FinishedTodos from '@components/Todo/FinishedTodos';
import NewTodo from '@components/Todo/NewTodo';
import RemainingTodos from '@components/Todo/RemainingTodos';
import SearchTodo from '@components/Todo/SearchTodo';
import useToast from '@hooks/useToast';
import useTodosMutation from '@hooks/useTodosMutation';
import { Button } from '@ui/Buttons';
import { TrashIcon } from '@ui/Icons';
import { Modal } from '@ui/Modal';
import { fetcher } from '@utils/swr.utils';
import { useCallback, useState, type FC } from 'react';
import Div100vh from 'react-div-100vh';
import { Toaster } from 'react-hot-toast';
import { SWRConfig } from 'swr';

const App: FC = () => {
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const { mutateTodos } = useTodosMutation();
  const { addToast } = useToast();

  const onConfirmationModalOpen = useCallback(() => {
    setConfirmationModalOpen(true);
  }, []);

  const onConfirmationModalClose = useCallback(() => {
    setConfirmationModalOpen(false);
  }, []);

  const onDeleteAllTodos = useCallback(() => {
    setConfirmationModalOpen(false);

    fetcher(ROUTES.Todos, { method: 'DELETE' })
      .then(() => {
        mutateTodos();
        addToast({
          title: 'Warning',
          content: 'You have completely deleted all todos',
          colorSchema: 'warning',
        });
      })
      .catch((error) => {
        console.error(error);
        addToast({
          title: 'Error',
          content: 'An unexpected error occurred, please try again later',
          colorSchema: 'danger',
        });
      });
  }, [mutateTodos, addToast]);

  return (
    <Div100vh className="flex items-center justify-center px-4">
      <SWRConfig
        value={{ refreshInterval: 30_000, fetcher, revalidateOnFocus: false }}
      >
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
          confirmButton={
            <Button
              colorSchema="danger"
              onClick={onDeleteAllTodos}
            >
              Confirm
            </Button>
          }
          onClose={onConfirmationModalClose}
        >
          <p className="text-sm text-accent-4">
            Are you sure you want to delete all tasks? All data will be
            permanently removed from our servers forever. This action cannot be
            undone.
          </p>
        </Modal>
      </SWRConfig>
    </Div100vh>
  );
};

export default App;
