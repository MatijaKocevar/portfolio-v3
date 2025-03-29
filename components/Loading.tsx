export default function LoadingSpinner() {
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm'>
            <div className='h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent' />
        </div>
    );
}
