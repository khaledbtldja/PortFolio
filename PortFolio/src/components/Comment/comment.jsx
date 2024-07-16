import React, { useEffect, useState } from "react";
import "./comment.scss";

function Comment() {
  const [commentaires, setCommentaires] = useState([]);
  const [nouveauCommentaire, setNouveauCommentaire] = useState("");
  const [nouvelAuteur, setNouvelAuteur] = useState("");
  const [indexEnEdition, setIndexEnEdition] = useState(null);
  const [pageActuelle, setPageActuelle] = useState(1);
  const commentairesParPage = 3;

  useEffect(() => {
    const commentairesEnregistres = JSON.parse(localStorage.getItem("commentaires")) || [];
    setCommentaires(commentairesEnregistres);
  }, []);

  const changerContenu = (event, index) => {
    const commentairesMisAJour = [...commentaires];
    commentairesMisAJour[index].contenu = event.target.value;
    setCommentaires(commentairesMisAJour);
  };

  const supprimerCommentaire = index => {
    const commentairesMisAJour = commentaires.filter((_, i) => i !== index);
    setCommentaires(commentairesMisAJour);
    localStorage.setItem("commentaires", JSON.stringify(commentairesMisAJour));
  };

  const changerNouveauCommentaire = event => {
    setNouveauCommentaire(event.target.value);
  };

  const changerNouvelAuteur = event => {
    setNouvelAuteur(event.target.value);
  };

  const demarrerEdition = index => {
    setIndexEnEdition(index);
  };

  const ajouterCommentaire = () => {
    const commentairesMisAJour = [...commentaires, { auteur: nouvelAuteur || "Inconnu", contenu: nouveauCommentaire }];
    setCommentaires(commentairesMisAJour);
    localStorage.setItem("commentaires", JSON.stringify(commentairesMisAJour));
    setNouveauCommentaire("");
    setNouvelAuteur("");
  };

  const sauvegarderCommentaire = index => {
    const commentairesMisAJour = [...commentaires];
    localStorage.setItem("commentaires", JSON.stringify(commentairesMisAJour));
    setIndexEnEdition(null);
  };

  const indexDebut = (pageActuelle - 1) * commentairesParPage;
  const commentairesAffiches = commentaires.slice(indexDebut, indexDebut + commentairesParPage);
  const totalPages = Math.ceil(commentaires.length / commentairesParPage);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="header">
          <h1>Bienvenue sur notre page de commentaires</h1>
          <p>N'hésitez pas à laisser un commentaire ci-dessous :</p>
        </div>

        <div className="content">
          <div className="comment-list">
            {commentairesAffiches.length === 0 ? (
              <p className="empty">Aucun commentaire disponible. Soyez le premier à en laisser un !</p>
            ) : (
              commentairesAffiches.map((commentaire, index) => (
                <div className="commentaire" key={index}>
                  <h2>{commentaire.auteur}</h2>
                  {indexEnEdition === index ? (
                    <>
                      <textarea
                        value={commentaire.contenu}
                        onChange={(event) => changerContenu(event, index)}
                        className="editable-textarea"
                      />
                      <div className="buttons">
                        <button onClick={() => sauvegarderCommentaire(index)}>Sauvegarder</button>
                      </div>
                    </>
                  ) : (
                    <>
                      <p>{commentaire.contenu}</p>
                      <div className="buttons">
                        <button onClick={() => demarrerEdition(index)}>Modifier</button>
                        <button onClick={() => supprimerCommentaire(index)}>Supprimer</button>
                      </div>
                    </>
                  )}
                </div>
              ))
            )}
          </div>

          <div className="pagination">
            <button onClick={() => setPageActuelle(prev => Math.max(prev - 1, 1))} disabled={pageActuelle === 1}>
              Précédent
            </button>
            <span>Page {pageActuelle} sur {totalPages}</span>
            <button onClick={() => setPageActuelle(prev => Math.min(prev + 1, totalPages))} disabled={pageActuelle === totalPages}>
              Suivant
            </button>
          </div>

          <div className="nouveau-commentaire">
            <input
              type="text"
              placeholder="Votre nom"
              value={nouvelAuteur}
              onChange={changerNouvelAuteur}
            />
            <textarea
              placeholder="Ajouter un commentaire..."
              value={nouveauCommentaire}
              onChange={changerNouveauCommentaire}
            />
            <button onClick={ajouterCommentaire}>Ajouter un commentaire</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
