import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === 'GET') {
    try {
      const tasks = await prisma.tasks.findMany({
        select: {
          id: true,
          name: true,
          done: true,
        },
      });
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tasks' });
    }
  } else if (method === 'POST') {
    try {
      const { taskName } = req.body;
      const task = await prisma.tasks.create({
        data: {
          name: taskName,
        },
      });
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  } else if (method === 'DELETE') {
    const { taskId } = req.body;
    try {
      await prisma.tasks.delete({
        where: { id: taskId },
      });
      res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete task' });
    }
  } else if (method === 'PATCH') {
    const { taskId, done } = req.body;

    try {
      const updatedTask = await prisma.tasks.update({
        where: { id: taskId },
        data: { done },
      });
      res.status(200).json(updatedTask);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update task' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
