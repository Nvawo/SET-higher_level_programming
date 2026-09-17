#!/usr/bin/node

class TaskNotifier {
  static notifyQueueStart (queueName) {
    console.log(`Starting queue ${queueName}.`);
  }

  static notifyHighPriority (queueName, priority) {
    if (priority > 9) {
      console.warn(`High priority task added to ${queueName}.`);
    }
  }

  static logError (message) {
    console.error(message);
  }
}

class Task {
  constructor (taskFn, priority = 0) {
    if (typeof taskFn !== 'function') {
      throw new TypeError('Task must be a function.');
    }

    this.taskFn = taskFn;
    this.priority = priority;
    this.timestamp = Date.now();
  }
}

class TaskQueue {
  constructor (name, notifier = TaskNotifier) {
    this.queueName = name;
    this.tasks = [];
    this.isProcessing = false;
    this.notifier = notifier;
  }

  addTask (taskFn, priority) {
    let task;

    try {
      task = new Task(taskFn, priority);
    } catch (error) {
      this.notifier.logError(error.message);
      return false;
    }

    this.tasks.push(task);
    this.notifier.notifyHighPriority(this.queueName, task.priority);
    this._checkAndSchedule();

    return true;
  }

  _checkAndSchedule () {
    if (!this.isProcessing && this.tasks.length > 0) {
      this.notifier.notifyQueueStart(this.queueName);
      this._startProcessing();
    }
  }

  _startProcessing () {
    this.isProcessing = true;
    // ... logic to process tasks ...
  }
}

module.exports = TaskQueue;
