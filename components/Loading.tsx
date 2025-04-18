export default function LoadingSpinner() {
    return (
        <div className='z-50 flex h-full w-full items-center justify-center'>
            <div className='h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent' />
        </div>
    );
}
