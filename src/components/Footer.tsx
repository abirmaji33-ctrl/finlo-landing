export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>
          <strong>Abrish AI</strong> · Early concept. Recording, transcription, summaries and integrations shown on this
          page are not live yet; screens use invented sample data.
        </p>
        <p>© {new Date().getFullYear()} Abrish AI</p>
      </div>
    </footer>
  );
}
