
export class TPropsError extends Error {
	constructor(componentName: string, err: string) {
		const message = `Invalid ${ componentName } prop: ${ err }`
		super(message)
		this.name = 'PropsError'
	}
}

