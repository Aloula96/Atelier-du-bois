<?php include 'partials/header.php'; ?>
<main>
    <div class="input__container">
        <h2>Contactez-nous</h2>
        <form action="#" method="post">

            <label for="name">Nom :</label>
            <input type="text" id="name" name="name" required>
            <span class="error-message" id="nameError"></span>

            <label for="email">Email :</label>
            <input type="email" id="email" name="email" required>
            <span class="error-message" id="emailError"></span>

            <label for="message">Message :</label>

            <textarea id="message" name="message" required></textarea>
            <span class="error-message" id="messageError"></span>

            <button type="submit">Envoyer</button>
        </form>
    </div>
</main>
<?php include 'partials/footer.php'; ?>