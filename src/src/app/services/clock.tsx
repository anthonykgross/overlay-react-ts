export class Clock {
    timeout: number;
    interval: any = null;
    callbacks: Function[] = [];

    constructor(timeout: number) {
        this.timeout = timeout;
    }

    start = () => {
        this.interval = setInterval(() => this.run(), this.timeout);
    }

    stop = () => {
        clearInterval(this.interval);
    }

    add = (callback: Function) => {
        this.callbacks.push(callback);
    }

    run() {
        let callback: Function;

        for (callback of this.callbacks) {
            callback();
        }
    }
}